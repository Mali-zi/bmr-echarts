import { BaseService } from "bi-internal/core";
import { KoobDataService, KoobFiltersService } from "bi-internal/services";
const { koobDataRequest3 } = KoobDataService;

interface IFilters {
  [key: string]: string[];
}

export interface IDimension {
  id: string;
  title: string;
  type: string;
  values: string[];
}

export interface IMyFilterModel {
  loading: boolean;
  error: string;
  dimensions: IDimension[];
  filters: {};
}

export class MyFilterService extends BaseService<IMyFilterModel> {
  private constructor() {
    super({
      loading: true,
      error: null,
      dimensions: [],
      filters: {},
    });

    const selectedDimensionNames = ["dt", "org_level2"];
    let selectedDimensions;
    let dimensionsWithValues: IDimension[] = [];
    fetch(
      `/api/db/koob.dimensions/.filter(source_ident='luxmsbi'&&cube_name='electricity_payments_plan')`
    )
      .then((res) => res.json())
      .then((dimensionsList) => {
        selectedDimensions = dimensionsList?.filter((dimensionCfg) =>
          selectedDimensionNames.includes(dimensionCfg.sql_query)
        );
      });

    Promise.all(
      selectedDimensionNames.map((dim) =>
        koobDataRequest3(
          "luxmsbi.electricity_payments_plan",
          [`${dim}:value`],
          [],
          {},
          {},
          `values_for_${dim}`
        )
      )
    ).then((dimData) => {
      const dimensionsValues = [];
      dimensionsValues[0] = dimData[0].map((d) => d.value);
      dimensionsValues[1] = dimData[1]
        .map((d) => d.value)
        .filter((element) => {
          return element !== null && element !== undefined;
        });

      dimensionsWithValues = selectedDimensions.map((dim, index) => ({
        id: dim.sql_query,
        title: dim.name,
        type: dim.type,
        values: dimensionsValues[index],
      }));
      console.log("dimensionsWithValues", dimensionsWithValues);
      this._updateWithData({
        loading: false,
        dimensions: dimensionsWithValues,
      });
    });
  }

  public setFilters = (newFilters: IFilters) => {
    KoobFiltersService.getInstance().setFilters("", newFilters);
    // уведомляем сервис, что filters обновлен
    this._updateWithData({ loading: false, filters: { ...newFilters } });
  };
  protected _dispose() {
    super._dispose();
  }

  public static getInstance = () => {
    if (!window["__myFilterService"]) {
      window["__myFilterService"] = new MyFilterService();
    }
    return window["__myFilterService"];
  };
}
MyFilterService.getInstance();

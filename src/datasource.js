import _ from "lodash";
import { SignifaiServices } from './signifaiService';

export class GenericDatasource {

  constructor(instanceSettings, $q, backendSrv, templateSrv) {
    this.q = $q;
    this.backendSrv = backendSrv;
    this.templateSrv = templateSrv;

    // SignifAI Services
    const url = instanceSettings.url;
    const user_id = instanceSettings.jsonData.user_id;
    const secret = instanceSettings.jsonData.secret;
    this.signifaiServices = new SignifaiServices(url, user_id, secret);
  }

  query(options) {
    return Promise.resolve([]);
  }

  testDatasource() {
    return this.q((resolve, reject) => {
      this.signifaiServices.test(response => {
        resolve({
          title: "SignifAI Datasource",
          status: response.status,
          message: response.message
        });
      });
    });
  }

  metricsSuggestion(name) {
    const response = this.signifaiServices.getMetricsSuggestions(name);
    return Promise.resolve(response);
  }

  attributesSuggestion(name) {
    const response = this.signifaiServices.getAttributesSuggestion(name);
    return Promise.resolve(response);
  }
}

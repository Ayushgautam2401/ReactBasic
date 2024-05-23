import { URLRoutes } from "URLRoutes";
import { testRext } from "./rext";

export function getTestRequest(templateFile: string) {
  return testRext.request({
    method: 'get',
    url: URLRoutes.server.test,
    urlParams: {
      templateFile,
    },
  });
}

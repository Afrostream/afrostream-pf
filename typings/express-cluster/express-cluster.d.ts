declare module "express-cluster" {
  namespace e {
    interface WorkerInfo {
      id: number
    }
    interface Conf {
      count?: number,
      verbose?: boolean
    }
  }

  function e(
    callback: (workerInfo: e.WorkerInfo) => void,
    conf: e.Conf
  ) : void;

  export = e;
}

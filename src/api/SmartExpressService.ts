import { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { IUser } from "@/types";

export class SmartExpressService {
  #instance: AxiosInstance;
  constructor(instance: AxiosInstance) {
    this.#instance = instance;
  }

  public async getUserCollection(): Promise<
    AxiosResponse<IUser[], AxiosError>
  > {
    return await this.#instance.get(`api/v1/users`);
  }
}

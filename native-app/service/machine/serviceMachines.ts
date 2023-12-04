import axios from "axios";
import { MachineData } from "./../../types";
import { handleApiError } from "./../../utils/errorHandling";
import { getApiUrl } from "./../../service/api/apiConfig";
import { getSessionData } from "./../session/session";

export const serviceMachines = async ({
  machineData,
}: {
  machineData: MachineData;
}) => {
  const apiUrl = getApiUrl();

  try {
    const session = await getSessionData();
    const response = await axios.post(apiUrl, {
      user: session?.user.id,
      machines: machineData?.machines,
    });

    if (response.data?.factory) {
      return response.data;
    }
  } catch (error) {
    handleApiError(error);
  }
};

export const serviceGetMachinesData = async () => {
  const apiUrl = getApiUrl();

  try {
    const session = await getSessionData();
    const response = await axios.get(apiUrl, {
      params: {
        user: session?.user.id,
      },
    });

    console.log("************");
    console.log(response.data);
    console.log("************");

    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error) {
    handleApiError(error);
  }
};

export const serviceDeleteHistory = async () => {
  const apiUrl = getApiUrl();

  try {
    const session = await getSessionData();
    const response = await axios.delete(apiUrl, {
      params: {
        user: session?.user.id,
      },
    });

    if (response.data) {
      return response.data;
    }
    return null;
  } catch (error) {
    handleApiError(error);
  }
};

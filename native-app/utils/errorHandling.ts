export const handleApiError = (error: any) => {
  console.error(error);
  console.log(getErrorMessage(error));
};

export const handleError = (error: any) => {
  console.error(error);
  return JSON.stringify(error);
};

export const getErrorMessage = (error: any): string => {
  return `There was an error calculating health. ${
    error?.toString() === "AxiosError: Network Error"
      ? "Is the API server started?"
      : error
  }`;
};

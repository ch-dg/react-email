'use server';

type Config = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  cache: RequestCache | undefined;
  headers: {
    'Content-Type': string;
    Authorization?: string;
  };
  body: string | null;
};

export const httpReq = async (url: string, config: Config) => {
  // Delay to test loading state
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      throw new Error(JSON.stringify({ errorMessage: response.statusText, errorStatus: response.status }));
    }

    const responseData = {
      isValid: true,
      statusCode: response.status,
      message: response.statusText,
      response: await response.json(),
    };

    return responseData;
  } catch (err: unknown | Error) {
    let errorThrown;
    if (err instanceof Error) {
      if (err.message.includes('errorMessage')) {
        errorThrown = JSON.parse(err.message);
      } else {
        errorThrown = { errorMessage: err.message, errorStatus: '500' };
      }
    } else {
      errorThrown = err;
    }

    const responseData = {
      isValid: false,
      statusCode: errorThrown.errorStatus,
      message: errorThrown.errorMessage,
      response: { error: `${errorThrown?.errorStatus} ${errorThrown?.errorMessage}` },
    };
    return responseData;
  }
};

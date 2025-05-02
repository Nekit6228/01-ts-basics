export function getMessage(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello from TS");
      }, 1000);
    });
  }
  

  



export type User = {
    token: string;
    profile?: string;
    username: string;
  };

  const useLocal = () => {
    if (typeof window === 'undefined') {
      return {
        getLocalData: () => null,
      };
    }
    const userData = JSON.parse(localStorage.getItem("user")!);
    const getLocalData = () => {
      return userData;
    };
  
    return {
      getLocalData,
    };
  };
  
  export default useLocal;
  
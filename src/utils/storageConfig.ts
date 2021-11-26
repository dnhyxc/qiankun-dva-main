export const setLStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as string) || [];
};

export const removeLStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const clear = () => {
  localStorage.clear();
};

export const setSStorage = (key: string, value: any) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSStorage = (key: string) => {
  return JSON.parse(sessionStorage.getItem(key) as string) || [];
};

export const removeSStorage = (key: string) => {
  sessionStorage.removeItem(key);
};

const IStorage = (() => {
  let init: any = null;

  class Storage {
    clear() {
      localStorage.clear();
    }
  }

  return () => {
    if (!init) {
      init = new Storage();
    }
    return init;
  };
})();

const storage = IStorage();

export { storage };

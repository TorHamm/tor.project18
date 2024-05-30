// Define an interface to represent the structure of your JSON data
export interface DesignData {
  web: {
    heroText: {
      title: string;
      text: string;
    };
    work: {
      imageUrls: string;
      name: string;
      description: string;
    }[];
  };
  app: {
    heroText: {
      title: string;
      text: string;
    };
    work: {
      imageUrls: string;
      name: string;
      description: string;
    }[];
  };
  graphic: {
    heroText: {
      title: string;
      text: string;
    };
    work: {
      imageUrls: string;
      name: string;
      description: string;
    }[];
  };
}

// Define a separate interface for the data object itself
export interface DataObject {
  [key: string]: DesignData[keyof DesignData];
}

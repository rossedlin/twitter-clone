const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry***REMOVED***
      getFID(onPerfEntry***REMOVED***
      getFCP(onPerfEntry***REMOVED***
      getLCP(onPerfEntry***REMOVED***
      getTTFB(onPerfEntry***REMOVED***
    }***REMOVED***
  }
};

export default reportWebVitals;

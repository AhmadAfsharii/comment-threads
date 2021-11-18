const constants = {
  DATE_FORMAT: {
    locale: 'en-US',
    dateOptions: {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      hour12: true,
      minute: '2-digit',
    } as Intl.DateTimeFormatOptions,
  },
};

export default constants;

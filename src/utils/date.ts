import constants from '../configs/constants';

function currentDate(): string {
  return new Date().toLocaleDateString(
    constants.DATE_FORMAT.locale,
    constants.DATE_FORMAT.dateOptions,
  );
}

export default { currentDate };

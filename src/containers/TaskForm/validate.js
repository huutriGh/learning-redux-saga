const validate = values => {
  const error = {};
  const { title } = values;
  if (!title) {
    error.title = 'Vui long nhap tieu de';
  } else if (title.trim() && title.length < 5) {
    error.title = 'Tieu de phai tu 5 ky tu';
  }
  return error;
};
export default validate;

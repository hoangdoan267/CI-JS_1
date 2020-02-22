const controller = {};

controller.validateForm = registerInfo => {
  if (!registerInfo.email) {
    view.setError('email-error', 'Email không được bỏ trống');
  } else {
    view.setError('email-error', '');
  }

  if (!registerInfo.password) {
    view.setError('password-error', 'Mật khẩu không được bỏ trống');
  } else {
    view.setError('email-error', '');
  }

  if (
    !registerInfo.confirmPassword ||
    registerInfo.confirmPassword !== registerInfo.password
  ) {
    view.setError('confirmPassword-error', 'Mật khẩu không trùng nhau');
  } else {
    view.setError('email-error', '');
  }
};

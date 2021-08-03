
// ! Forms Validation
jQuery.validator.addMethod("matches", function (phone, element) {
  return (
    this.optional(element) || (phone.length > 10 && phone.match(/^01[0-9]{9}$/))
  );
});
// Login Validation
if ($("#loginForm").length) {
  $("#loginForm").validate({
    rules: {
      phone: {
        required: true,
        matches: true,
      },
      password: {
        required: true,
      },
    },
    messages: {
      phone: {
        required:
          document.dir === "rtl"
            ? "من فضلك, أدخل رقم الموبايل"
            : "Please, Enter your phone number",
        matches:
          document.dir === "rtl"
            ? "من فضلك, ادخل رقم موبايل صحيح"
            : "Please, Enter valid phone number",
      },
      password: {
        required:
          document.dir === "rtl"
            ? "من فضلك, ادخل كلمة السر الخاصة بك"
            : "Please, Enter your password",
      },
    },
    submitHandler: function (form) {
      form.submit();
    },
  });
}
// Forget Password Validation
if ($("#forgetPassword").length) {
  $("#forgetPassword").validate({
    rules: {
      phone: {
        required: true,
        matches: true,
      },
    },
    messages: {
      phone: {
        required:
          document.dir === "rtl"
            ? "من فضلك, أدخل رقم الموبايل"
            : "Please, Enter your phone number",
        matches:
          document.dir === "rtl"
            ? "من فضلك, ادخل رقم موبايل صحيح"
            : "Please, Enter valid phone number",
      },
    },
    submitHandler: function (form) {
      form.submit();
    },
  });
}




// Signup Validation
if ($("#signupForm").length) {
  $("#signupForm").validate({
    rules: {
      first_name: {
        required: true,
      },
      last_name: {
        required: true,
      },
      phone: {
        required: true,
        matches: true,
      },
      password: {
        required: true,
        minlength: 8,
      },
      confirm_password: {
        equalTo: "#password",
      },
    },
    messages: {
      first_name: {
        required:
          document.dir === "rtl"
            ? "يجب عليك إدخال أسمك الأول"
            : "Please, Enter your first name",
      },
      last_name: {
        required:
          document.dir === "rtl"
            ? " يجب عليك إدخال أسمك الأخير"
            : "Please, Enter your last name",
      },
      phone: {
        required:
          document.dir === "rtl"
            ? "من فضلك، ادخل رقم الموبايل"
            : "Please, Enter your phone number",
        matches:
          document.dir === "rtl"
            ? "من فضلك, ادخل رقم موبايل صحيح"
            : "Please, Enter valid  phone number",
      },
      password: {
        required:
          document.dir === "rtl"
            ? "من فضلك, ادخل كلمة السر الخاصة بك"
            : "Please, Enter your password",
        minlength:
          document.dir === "rtl"
            ? "يجب أن لا تكون كلمة السر أقل من 8 أحرف/أرقام"
            : "Enter at least 8 Characters",
      },
      confirm_password: {
        equalTo:
          document.dir === "rtl"
            ? "يجب أن تكون كلمة السر متطابقة"
            : "The password don't match!",
      },
    },
    submitHandler: function (form) {
      form.submit();
    },
  });
}
const components = {};

components.register = `
<div class='register-container'>
<div class='form-wrapper'>
  <div class='logo'>
    <span>Mindx Chat</span>
  </div>

  <div class='form-container'>
    <form id='register-form'>
      <div class='name-wrapper'>
        <div class='input-wrapper'>
          <input class='input' type="text" name="firstName" placeholder="First name" />
          <div class="error" id="firstName-error"></div>
          </div>
        
        <div class='input-wrapper'>
          <input class='input' type="text" name="lastName" placeholder="Last name" />
          <div class="error" id="lastName-error"></div>
          </div>
      </div>

      <div class='input-wrapper'>
        <input class='input' type="email" name="email" placeholder="Email" />
        <div class="error" id="email-error"></div>

      </div>

      <div class='input-wrapper'>
        <input class='input' type="password" name="password" placeholder="Password" />
        <div class="error" id="password-error"></div>
      </div>

      <div class='input-wrapper'>
        <input class='input' type="password" name="confirmPassword" placeholder="Confirm password" />
        <div class="error" id="confirmPassword-error"></div>
      </div>

      <div class='input-wrapper register-footer'>
        <a id='already-have-account'>Already have an account? Login</a>
        <button class='btn' type='submit'>
          <span>Register</span>
        </button>
      </div>
    </form>
  </div>
</div>
</div>
`;

components.login = `<div><h1>Login Screen</h1></div>`;

Vue.component('login', {
    template: `
      <div class="container">
        <h2>Login</h2>
        <form @submit.prevent="login">
          <div>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <div>
            <label for="password">Senha:</label>
            <input type="password" id="password" v-model="password" required>
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    `,
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Lógica de autenticação aqui
        console.log('Email:', this.email);
        console.log('Senha:', this.password);
        // Redirecionar ou fazer outra ação após o login
      }
    }
  });
  
  Vue.component('sign-in', {
    template: `
      <div class="container">
        <h2>Sign-in</h2>
        <form @submit.prevent="signIn">
          <div>
            <label for="newEmail">Email:</label>
            <input type="email" id="newEmail" v-model="newEmail" required>
          </div>
          <div>
            <label for="newPassword">Senha:</label>
            <input type="password" id="newPassword" v-model="newPassword" required>
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    `,
    data() {
      return {
        newEmail: '',
        newPassword: ''
      };
    },
    methods: {
      signIn() {
        // Lógica de cadastro aqui
        console.log('Novo Email:', this.newEmail);
        console.log('Nova Senha:', this.newPassword);
        // Redirecionar ou fazer outra ação após o cadastro
      }
    }
  });
  
  new Vue({
    el: '#app',
    data: {
      isUserRegistered: false // Você pode definir isso como verdadeiro se o usuário já estiver cadastrado
    }
  });
  
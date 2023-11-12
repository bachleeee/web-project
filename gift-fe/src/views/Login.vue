<template>
    <div class="container">
        <div class="login-page">
            <div class="login-container py-5">
                <form @submit.prevent="login">
                    <div class="d-flex justify-content-center pb-1">
                        <h4>Đăng nhập</h4>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" v-model="email" placeholder="Nhập email">

                    </div>
                    <div class="form-group">
                        <label for="password">Mật khẩu</label>
                        <input type="password" class="form-control" id="password" v-model="password"
                            placeholder="Nhập mật khẩu">
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="remember">
                        <label class="form-check-label" for="remember">Ghi nhớ</label>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button type="submit" class="btn btn-dark">Login</button>
                    </div>
                    <div v-if="error" class="mt-2 text-danger">
            {{ error }}
          </div>
                    <div class="mt-4">
                        <p>Nếu chưa có tài khoản, </p>
                    </div><router-link to="/signup">Đăng ký ngay</router-link>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import UserService from '@/service/user.service';

export default {
    data() {
        return {
            email: '',
            password: '',
            error: '',
        };
    },
    methods: {
        async login() {
            try {
                console.log('Login button clicked.');
                const response = await UserService.login({
                    email: this.email,
                    password: this.password,
                })

                if(!response) {
                    console.log('fail')
                }
                this.$router.push('/');
            } catch (error) {
                console.error('Error:', error);
                console.error('Error:', error.message);
            }
        },
    },
};
</script>


<style scoped>
.login-page {
    background-color: #f0f0f0;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login-container {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 400px;
}

label {
    font-weight: bold;
    color: #333;
}

.form-control {
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 15px;
    padding: 10px;
}

.btn-dark {
    background-color: #343a40;
    color: #fff;
}

.btn-dark:hover {
    background-color: #23282d;
}

.mt-4 p {
    color: #555;
}

.mt-4 router-link {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
}

.mt-4 router-link:hover {
    text-decoration: underline;
}
</style>

import createApiClient from "./api.service";
class UserService {
    constructor(baseUrl = "/api/users") {
        this.api = createApiClient(baseUrl);
    }
    async create(data) {
        return (await this.api.post("/register", data)).data;
    }
    async login(data) {
        return (await this.api.post("/login", data)).data;
    }
    async logout(data) {
        return (await this.api.post("/logout", data)).data;
    }
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    }
}
export default new UserService();
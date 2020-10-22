import { Seeder } from 'mongoose-data-seed';
import User from '../models/User';


const data = [
    {
        name: 'Test Subject #666',
        email: '666@test.com',
        password: '$2a$10$BCtxz4YAiLHY0o/NEO0I2eXviXhYyzUZQZSD/831vLEKGjk454l/S',
        playthrough: 0,
        progress: 0,
        sanity: 0
    }


]

class UsersSeeder extends Seeder {

    async shouldRun() {
        return User.countDocuments().exec().then(count => count === 0);
    }

    async run() {
        return User.create(data);
    }
}

export default UsersSeeder;

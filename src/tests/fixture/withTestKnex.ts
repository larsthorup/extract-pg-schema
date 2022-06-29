import knex, { Knex } from 'knex';
import { StartedTestContainer } from 'testcontainers';

import { BlockWith, TestWith, use } from './withFixture';

const withTestKnex = (
  test: TestWith<{ container: StartedTestContainer }>,
  block: BlockWith<{ container: StartedTestContainer; db: Knex }>
) => {
  test.describe(withTestKnex.name, () => {
    let db: Knex;
    test.beforeAll(({ container }) => {
      const config = {
        client: 'postgres',
        connection: {
          host: container.getHost(),
          database: 'postgres',
          port: container.getMappedPort(5432),
          password: 'postgres',
          user: 'postgres',
        },
      };
      db = knex(config);
    });
    test.afterAll(async () => {
      db.destroy();
    });
    use(test, () => ({ db }), block);
  });
};

export default withTestKnex;

import { GenericContainer, StartedTestContainer } from 'testcontainers';

import { BlockWith, TestWith, use } from './withFixture';

const timeout = 5 * 60 * 1000;

export const startTestContainer = async (image: string) =>
  // Starting this with withReuse() enabled will spin up the container
  // on the first call and then reuse it on subsequent calls.
  new GenericContainer(image)
    .withReuse()
    .withExposedPorts(5432)
    .withEnv('POSTGRES_PASSWORD', 'postgres')
    .withStartupTimeout(timeout)
    .start();

const withPostgresContainer = (
  test: TestWith<{}>,
  block: BlockWith<{ container: StartedTestContainer }>,
  image: string = 'postgres'
) => {
  test.describe(withPostgresContainer.name, () => {
    let container: StartedTestContainer;
    test.beforeAll(async () => {
      container = await startTestContainer(image);
    }, timeout);
    use(test, () => ({ container }), block);
  });
};

export default withPostgresContainer;

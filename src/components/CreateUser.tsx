import { Button, Card, Switch, TextInput, Title } from "@tremor/react";

function CreateUser() {
  return (
    <>
      <Card className="my-8 rounded-md">
        <Title>Create User</Title>
        <form className="mt-4">
          <div className="flex content-between gap-2">
            <TextInput className="rounded-lg " placeholder="Name" />
            <TextInput className="rounded-lg" placeholder="Email" />
            <TextInput className="rounded-lg" placeholder="Github" />

            <div className="flex items-center gap-2">
              <label
                className="text-tremor-default text-tremor-content dark:text-dark-tremor-content"
                htmlFor="status"
              >
                Status
              </label>
              <Switch id="status" defaultChecked={false} />
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <Button color="indigo" type="submit">
              Create User
            </Button>
          </div>
        </form>
      </Card>
    </>
  );
}

export default CreateUser;

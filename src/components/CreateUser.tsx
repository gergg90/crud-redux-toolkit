import { Badge, Button, Card, Switch, TextInput, Title } from "@tremor/react";
import React, { useState } from "react";
import { useUserActions } from "../hooks/useUserActions";

function CreateUser() {
  const { createUserFromHook } = useUserActions();
  const [result, setResult] = useState<"ok" | "ko" | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setResult(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const github = formData.get("github") as string;
    const status = formData.get("status");

    if (!name || !email || !github) {
      return setResult("ko");
    }

    createUserFromHook({ name, email, github, status });
    setResult("ok");
    form.reset();
  };

  return (
    <>
      <Card className="my-8 rounded-md">
        <Title>Create User</Title>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="flex content-between gap-2">
            <TextInput className="rounded-lg" name="name" placeholder="Name" />
            <TextInput
              className="rounded-lg"
              name="email"
              placeholder="Email"
            />
            <TextInput
              className="rounded-lg"
              name="github"
              placeholder="Github"
            />

            <div className="flex items-center gap-2">
              <label
                className="text-tremor-default text-tremor-content dark:text-dark-tremor-content"
                htmlFor="status"
              >
                Status
              </label>
              <Switch name="status" id="status" defaultChecked={false} />
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <Button color="indigo" type="submit">
              Create User
            </Button>
          </div>
          <span className="flex justify-center mt-2">
            {result === "ok" && (
              <Badge color="green">User saved successfully</Badge>
            )}
            {result === "ko" && <Badge color="red">Error in fields</Badge>}
          </span>
        </form>
      </Card>
    </>
  );
}

export default CreateUser;

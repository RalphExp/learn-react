import React from "react";
import { Fetch } from "./hooks";
import RepoMenu from "./RepoMenu";

export default function UserRepositories({login}) {
    return (
        <Fetch
            uri={`https://api.github.com/users/${login}/repos`}
            renderSuccess={({ data }) => (
                <RepoMenu
                    repositories={data}
                    login={login}
                />
            )}
        />
    );
}
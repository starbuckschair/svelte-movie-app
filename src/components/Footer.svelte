<footer>
    <div>
        <a href="https://github.com/starbuckschair/svelte-movie-app">
            GitHub Repo.
        </a>
    </div>
    <div>
        <a href="https://google.com">
            @{new Date().getFullYear()}
            Cain
        </a>
    </div>
</footer>

<style lang="scss">
    footer {
        padding: 70px;
        text-align: center;
        a {
            color: $color--white-10;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }
</style>

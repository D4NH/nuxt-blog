<template>
    <div class="row">
        <header class="col">
            <nav class="navbar navbar-expand-lg mt-2">
                <NuxtLink
                    class="navbar-brand"
                    to="/"
                >
                    Danh Nguyen
                </NuxtLink>
                <div class="ms-auto">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <NuxtLink
                                class="nav-link"
                                to="/about/"
                            >
                                Over mij
                            </NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink
                                class="nav-link"
                                to="/reizen/"
                            >
                                Reizen
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <hr class="mt-2" />
        </header>
    </div>
</template>

<style lang="scss" scoped></style>

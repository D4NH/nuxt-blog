<template>
    <div class="row">
        <header class="col">
            <nav class="navbar navbar-expand-lg mt-2">
                <div class="container-fluid">
                    <NuxtLink
                        class="navbar-brand"
                        to="/"
                    >
                        Danh Nguyen
                    </NuxtLink>
                    <div class="d-flex">
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
                                    to="/blog/"
                                >
                                    Blog
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr class="mt-2" />
        </header>
    </div>
</template>

<style lang="scss" scoped></style>

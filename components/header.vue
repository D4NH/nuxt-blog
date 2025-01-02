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
                                About me
                            </NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink
                                class="nav-link"
                                to="/travel/"
                            >
                                Travel
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <hr class="mt-2" />
        </header>
    </div>
</template>

<style lang="scss" scoped>
.navbar-expand-lg {
    .navbar-nav {
        flex-direction: row;
        .nav-link {
            padding-right: var(--bs-navbar-nav-link-padding-x);
            padding-left: var(--bs-navbar-nav-link-padding-x);
        }
    }
}
</style>

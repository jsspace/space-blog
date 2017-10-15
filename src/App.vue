<template>
    <div class="main">
        <div class="header">
            <div class="wrapper-new header-nav">
                <a href="/" class="logo">博客后台管理</a>
                <ul class="nav-tab">
                    <li :class="module === 'view' ? 'active' : ''">
                        <router-link to="/admin/view">访问量</router-link>
                    </li>
                    <li :class="module === 'edit' ? 'active' : ''">
                        <router-link to="/admin/edit">新文章</router-link>
                    </li>
                </ul>
                <div class="user-info" @mouseenter="isShow=true" @mouseleave="isShow=false">
                    <p class="detail-info">
                        <img src="./assets/img/space.jpg" alt="">
                    </p>
                    <ol class="application-list" v-show="isShow">
                        <li>
                            <a :href="logoutUrl">
                                logout
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="app-header">
            <div class="wrapper-new app-detail-header"></div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isShow: false,
                showSelector: false,
                app: 'apps',
                logoutUrl: 'https://passport.mobvoi.com/pages/logout?from=art&redirect_url=' + location.href
            };
        },
        computed: {
            module() {
                return this.$route.name;
            },
        },
        props: {},
        methods: {}
    }
</script>
import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage/HomePage'
import SearchResult from '../pages/SearchResult/SearchResult'
import tabGroup from '../pages/tabGroup/tabGroup'
import ManpowerResource from '../pages/ManpowerResource/ManpowerResource'
import Social from '../pages/Social/Social'
import Taxation from '../pages/Taxation/Taxation'
import ReservedFunds from '../pages/ReservedFunds/ReservedFunds'
import Choiceness from '../pages/Choiceness/Choiceness'
import News from '../pages/News/News'
import newList from '../pages/common/newsLis'
import Personal from '../pages/Personal/Personal'
import MyPublish from '../pages/Personal/MyPublish'
import MyReply from '../pages/Personal/MyReply'
import MyExpert from '../pages/Personal/MyExperts'
import PublishedArticles from '../pages/Personal/PublishedArticles'
import ReplyDetail from '../pages/ReplyDetail/ReplyDetail'
import Specialist from '../pages/Specialist/Specialist'
import AnswerDetail from '../pages/AnswerDetail/AnswerDetail'
import AskExperts from '../pages/AskExperts/AskExperts'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: {
        title: '燚智库'
      }
    },
    {
      path: '/AskExperts',
      name: 'AskExperts',
      component: AskExperts,
      meta: {
        title: '问专家'
      }
    },
    {
      path: '/AnswerDetail',
      name: 'AnswerDetail',
      component: AnswerDetail,
      meta: {
        title: '提问详情'
      }
    },
    {
      path: '/Specialist',
      name: 'Specialist',
      component: Specialist,
      meta: {
        title: '燚专家'
      }
    },
    {
      path: '/personal',
      name: 'Personal',
      meta: {
        title: '个人中心'
      },
      component: Personal
    },
    {
      path: '/ReplyDetail',
      name: 'ReplyDetail',
      meta: {
        title: '评论详情'
      },
      component: ReplyDetail
    },
    {
      path: '/personal/myreply',
      name: 'MyReply',
      meta: {
        title: '我的评论'
      },
      component: MyReply
    },
    {
      path: '/personal/MyExperts',
      name: 'MyExperts',
      meta: {
        title: '我的燚专家'
      },
      component: MyExpert
    },
    {
      path: '/personal/mypublish',
      name: 'MyPublish',
      meta: {
        title: '我的发布'
      },
      component: MyPublish
    },
    {
      path: '/personal/PublishedArticles',
      name: 'PublishedArticles',
      meta: {
        title: '发布精选'
      },
      component: PublishedArticles
    },
    {
      path: '/SearchResult',
      name: 'SearchResult',
      meta: {
        title: '搜索结果'
      },
      component: SearchResult
    },
    {
      path: '/tabGroup',
      name: 'tabGroup',
      component: tabGroup,
      children: [{
        path: '/tabGroup/HR',
        name: 'HR',
        meta: {
          category: 1,
          title: '人力资源'
        },
        component: ManpowerResource
      },
      {
        path: '/tabGroup/social',
        name: 'Social',
        meta: {
          category: 2,
          title: '社会保障'
        },
        component: Social
      },
      {
        path: '/tabGroup/taxation',
        name: 'Taxation',
        meta: {
          category: 3,
          title: '财务税收'
        },
        component: Taxation
      },
      {
        path: '/tabGroup/funed',
        name: 'ReservedFunds',
        meta: {
          category: 4,
          title: '公积金'
        },
        component: ReservedFunds
      },
      {
        path: '/tabGroup/Selection',
        name: 'Choiceness',
        meta: {
          category: 5,
          title: '燚精选'
        },
        component: Choiceness
      }]
    },
    {
      path: '/tabGroup/HR/news/:bookId',
      name: 'News1',
      meta: {
        title: '新闻详情'
      },
      component: News
    },
    {
      path: '/tabGroup/social/news/:bookId',
      name: 'News2',
      meta: {
        title: '新闻详情'
      },
      component: News
    },
    {
      path: '/tabGroup/taxation/news/:bookId',
      name: 'News3',
      meta: {
        title: '新闻详情'
      },
      component: News
    },
    {
      path: '/tabGroup/funed/news/:bookId',
      name: 'News4',
      meta: {
        title: '新闻详情'
      },
      component: News
    },
    {
      path: '/tabGroup/Selection/news/:bookId',
      name: 'News5',
      meta: {
        title: '新闻详情'
      },
      component: News
    },
    {
      path: '/tabGroup/HR/list:bookId',
      name: 'newList1',
      meta: {
        title: '新闻列表'
      },
      component: newList
    },
    {
      path: '/tabGroup/social/list:bookId',
      name: 'newList2',
      meta: {
        title: '新闻列表'
      },
      component: newList
    },
    {
      path: '/tabGroup/taxation/list:bookId',
      name: 'newList3',
      meta: {
        title: '新闻列表'
      },
      component: newList
    },
    {
      path: '/tabGroup/funed/list:bookId',
      name: 'newList4',
      meta: {
        title: '新闻列表'
      },
      component: newList
    }
  ]
})

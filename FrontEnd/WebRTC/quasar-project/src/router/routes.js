import MainLayout from 'layouts/MainLayout.vue';
import VideoLayout from 'layouts/VideoLayout.vue';
import LectureLayout from 'src/layouts/StudentLectureLayout.vue';
import TeacherExamLayout from 'src/layouts/TeacherExamLayout.vue';
import StudentExamLayout from 'src/layouts/StudentExamLayout.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
  },
  {
    path: '/video',
    component: VideoLayout,
  },
  {
    path: '/lecture',
    component: LectureLayout,
  },
  {
    path: '/exam',
    component: TeacherExamLayout,
  },
  {
    path: '/exam2',
    component: StudentExamLayout,
  },
  {
		path: '/layout',
		component: () => import('layouts/GoldenLayout.vue')
	},

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

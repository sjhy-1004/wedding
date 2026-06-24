/**
 * Simple & Clean Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "천성준",
    father: "천무웅",
    mother: "권선옥",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "이혜인",
    father: "이헌동",
    mother: "윤여애",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-10-04",
    time: "13:00",
    venue: "수성 호텔 스퀘어",
    hall: "3층 라포레홀(우천 시 2층 아이비홀)",
    address: "대구광역시 수성구 용학로 92-4",
    tel: "1899-1001",
    mapLinks: {
      kakao: "https://place.map.kakao.com/1578307110",
      naver: "https://naver.me/5ssT9jva"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "천성준", bank: "IM뱅크", number: "508-13-899-246-2" },
      { role: "아버지", name: "천무웅", bank: "농협", number: "352-1094-0056-13" },
      { role: "어머니", name: "권선옥", bank: "농협", number: "150039-51-142667" }
    ],
    bride: [
      { role: "신부", name: "이혜인", bank: "IM뱅크", number: "059-13-129244" },
      { role: "아버지", name: "이헌동", bank: "농협", number: "737039-52-000998" },
      { role: "어머니", name: "윤여애", bank: "농협", number: "737039-56-013308" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "성준 ♥ 혜인 결혼합니다",
    description: "2026년 10월 4일 오후 1시, 소중한 분들을 초대합니다."
  }
};

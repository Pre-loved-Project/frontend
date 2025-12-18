# Chalddack 찰딱

- 배포 URL: https://chalddack.vercel.app/ 
- 테스트용 계정
  - ID: test1@test.com
  - PW: 11111111
## Chalddack 서비스 소개
- 찰딱은 사용자 중심의 중고거래 경험을 제공하는 **중고 거래 플랫폼**입니다.
- 다양한 중고 물품을 탐색하고, 직접 상품을 등록하거나 거래에 참여할 수 있습니다.
- 실시간 채팅과 거래 예약 기능을 통해 안전한 거래를 진행할 수 있습니다.

## 팀원 소개
<div align="center">

| <a href="https://github.com/ghdtnals"><img src="https://github.com/ghdtnals.png" width="100"></a> | <a href="https://github.com/taew0o"><img src="https://github.com/taew0o.png" width="100"></a> |
| :---: | :---: |
| **[FE] [홍수민](https://github.com/ghdtnals)** | **[FE] [박태우](https://github.com/taew0o)** |

</div>


---

## 1. 기술 스택
| 분류 | 기술 스택 |
|------|-----------|
| **프론트엔드** | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwindcss&logoColor=white) ![React Query](https://img.shields.io/badge/React%20Query-FF4154?style=flat&logo=reactquery&logoColor=white) 
| **CI / CD** | ![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat&logo=githubactions&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white) |
| **협업** | ![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white) ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=figma&logoColor=white) ![Notion](https://img.shields.io/badge/Notion-000000?style=flat&logo=notion&logoColor=white) |

## 2. 프로젝트 구조
본 프로젝트는 **Next.js(App Router)** 기반으로 개발되었으며, **FSD(Feature-Sliced Design)** 아키텍처를 기반으로 핵심 레이어의 책임을 유지하되, 프로젝트 규모에 맞게 구조를 간소화하여 적용했습니다.

```bash
src/
├─ app/                        # Next.js App Router 
│  ├─ login/                  
│  ├─ signup/                 
│  ├─ my/                      
│  ├─ detail/[postingId]/      
│  └─ api/                     # Next Route Handlers 
│
├─ entities/                   # 핵심 도메인
│  ├─ post/
│  ├─ user/
│  └─ chat/
│
├─ features/                   # 사용자 행동 단위 기능
│  ├─ auth/
│  ├─ like/
│  ├─ createPost/
│  ├─ editPost/
│  ├─ editProfile/
│  ├─ deal/
│  └─ chat/
│
├─ widgets/                    # 복합 UI 블록
│  ├─ GNB/
│  └─ footer/
│
├─ views/                       # 페이지 전용 UI 
│
└─ shared/                      # 전역 공통 
```

## 3. 고민한 부분
### SSR 인증 인가
### 웹소켓
### 모달

## 4. 페이지별 기능
### 인증 페이지 (로그인 · 회원가입 페이지)
> 계정 생성 및 로그인, 유효성 검사를 수행합니다.<br/>
> 인증 상태에 따른 화면 전환 및 모달 처리를 수행합니다.

- **입력값 유효성 검사**
  - 이메일 형식, 비밀번호 조건 등 클라이언트 단 유효성 검사 
  - 잘못된 입력에 대해 즉각적인 피드백  
- **인증 결과 처리 모달**
  - 로그인 · 회원가입 성공/실패 결과에 따라 안내 모달 표시
  - 인증 만료 시 로그인 페이지로 이동 후, 세션 만료 안내 모달 표시

<table align="center">
  <tr>
    <th align="center">
      회원가입
    </th>
    <th align="center">
      로그인
    </th>
  </tr>
  <tr>
    <td align="center">
      <img
        src="https://github.com/user-attachments/assets/2256579c-20c0-4702-9cd2-eb027e7c793e"
        height="420"
      />
    </td>
    <td align="center">
      <img
        src="https://github.com/user-attachments/assets/756b3b30-670a-4ee5-b75b-4a745d9c6b26"
        height="420"
      />
    </td>
  </tr>
</table>


---

### GNB
> 서비스 내 주요 페이지로의 이동을 제공하는 전역 네비게이션입니다.

- **인증 상태 기반 네비게이션**
  - 비로그인 상태: 로그인 / 회원가입 버튼 
  - 로그인 상태: 판매하기 / 채팅하기 / 마이페이지 버튼  
- **반응형 네비게이션**
  - 화면 크기에 따라 레이아웃이 변경되는 반응형 GNB 구성
     
<!-- <table align="center" width="100%">
  <colgroup>
    <col width="65%" />
    <col width="35%" />
  </colgroup>
  <tr>
    <th align="center">웹</th>
    <th align="center">모바일</th>
  </tr>
  <tr>
    <td align="center" valign="top">
      <img
        src="https://github.com/user-attachments/assets/f12679bf-ae9e-4074-903f-f87bb864c29f"
        width="100%"
        alt="데스크탑 GNB"
      />
    </td>
    <td align="center" valign="top">
      <img
        src="https://github.com/user-attachments/assets/1b89af9d-05c8-4139-920a-0f847d2cdb91"
        width="360"
        alt="모바일 GNB"
      />
    </td>
  </tr>
</table> -->




---

### 채팅 
> 페이지 이동 없이 채팅 기능을 사용할 수 있도록,
> Portal 기반으로 제공되는 실시간 채팅 UI입니다.

- **채팅 목록**
  - 내가 참여 중인 채팅방 목록 제공
  - 각 채팅방의 최근 메시지 및 상태 표시

- **채팅방**
  - 판매자·구매자 간 실시간 메시지 송수신
  - 게시글 단위로 채팅방 관리
![찰딱_채팅생성](https://github.com/user-attachments/assets/4231a32a-ae64-4ae4-9542-0053c75c96d0)
![찰딱_채팅](https://github.com/user-attachments/assets/12666480-d24a-45ee-be27-0aa02c83f65f)
![찰딱_채팅거래](https://github.com/user-attachments/assets/39a35b9f-040b-4f00-95ff-6d9c866c762e)

---

### 게시글 목록 페이지 (홈)
> 중고 거래 물품을 탐색할 수 있습니다.

- **상품 조회**
   - 카테고리별 물품 탐색
   - 최신순/좋아요순/채팅순/조회순 정렬
   - SSR 기반 초기 데이터 프리패칭 + CSR 무한 스크롤
   - 물품 클릭 시 상세페이지로 이동

<table align="center" width="100%">
  <colgroup>
    <col width="55%" />
    <col width="45%" />
  </colgroup>
  <tr>
    <td align="center"><strong>웹</strong></td>
    <td align="center"><strong>모바일</strong></td>
  </tr>
  <tr>
    <td align="center">
      <img
        src="https://github.com/user-attachments/assets/cb6046bc-e167-4658-a920-f9f986528386"
        width="90%"
        alt="웹 화면"
      />
    </td>
    <td align="center">
      <img
        src="https://github.com/user-attachments/assets/0cb7faab-3ab5-4946-b42b-7c388e92ec9c"
        width="90%"
        alt="모바일 화면"
      />
    </td>
  </tr>
</table>

---


### 게시글 상세 페이지
> 게시글 상세 정보 및 채팅·좋아요 기능을 제공합니다.

- **상품 상세 정보**
  - 상품 제목, 가격, 설명 등 기본 정보 제공
  - SSR 기반 데이터 프리패칭으로 상품 상세 정보 즉시 제공
    
- **연관 상품 탐색**
  - 동일 판매자의 다른 상품 목록 제공
    
- **사용자 인터랙션**
  - 채팅을 통한 판매자와의 실시간 문의
  - 좋아요를 통한 관심 상품 표시
    

<table align="center" width="100%">
  <colgroup>
    <col width="55%" />
    <col width="45%" />
  </colgroup>
  <tr>
    <td align="center"><strong>웹</strong></td>
    <td align="center"><strong>모바일</strong></td>
  </tr>
  <tr>
    <td align="center">
      <img
        src="https://github.com/user-attachments/assets/42d8f420-a0f9-4211-adcf-df9e90c4f766"
        width="90%"
        alt="웹 화면"
      />
    </td>
    <td align="center">
      <img
        src="https://github.com/user-attachments/assets/38a4dd7d-509a-4d9b-96a1-c5949ef36852"
        width="90%"
        alt="모바일 화면"
      />
    </td>
  </tr>
</table>


---

### 마이 페이지
> 사용자 정보를 관리하고, 게시글을 등록하며, 직접 등록한 상품을 수정 및 삭제할 수 있습니다.

- **사용자 프로필 관리**
  - 프로필 이미지, 닉네임 등 기본 정보 표시
  - 프로필 정보 수정 기능 제공 (수정 성공/실패 시 안내 모달 표시)
  - SSR 기반 데이터 프리패칭으로 사용자 프로필 정보 즉시 제공

- **상품 등록**
  - 상품 제목, 가격, 카테고리, 설명, 이미지 입력 (등록 성공/실패 시 안내 모달 표시)
    
- **상품 관리**
  - 사용자 행동(판매·구매·관심)에 따라 상품을 구분하여 조회
  - 등록한 상품의 수정 및 삭제 기능 제공

<table align="center" width="100%">
  <colgroup>
    <col width="55%" />
    <col width="45%" />
  </colgroup>
  <tr>
    <th align="center">웹</th>
    <th align="center">모바일</th>
  </tr>
  <tr>
    <td align="center">
      <img
        src="https://github.com/user-attachments/assets/aeba87b2-ede0-4134-a790-dbf93ef5f230"
        width="90%"
        alt="프로필 수정 - 웹"
      />
    </td>
    <td align="center">
      <img
        src="https://github.com/user-attachments/assets/1cf06c59-fa4e-4d29-8490-ad6ead622fa1"
        width="90%"
        alt="프로필 수정 - 모바일"
      />
    </td>
  </tr>
</table>


---

### 상품 등록 / 수정 모달
> 사용자가 상품 게시글을 등록하거나 수정할 수 있도록 제공되는 모달입니다.

- **상품 정보 입력**
  - 상품 제목, 가격, 카테고리, 설명, 이미지 입력 가능
  - 필수 항목 누락 시 즉각적인 입력 안내 제공
- **처리 모달**
  - 등록 및 수정 성공 시 성공 안내 모달 표시
  - 실패 시 에러 상황에 맞는 안내 모달 표시
    
<table align="center" width="100%">
  <tr>
    <td align="center">
      <strong>등록 모달</strong>
    </td>
    <td align="center">
      <strong>수정 모달</strong>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img
        src="https://github.com/user-attachments/assets/58b6a55d-602a-4ca4-a5f7-50d1af7ea131"
        width="90%"
        alt="게시글 생성"
      />
    </td>
    <td align="center">
      <img
        src="https://github.com/user-attachments/assets/5e742c77-22ac-4b16-b466-6c48f3e4acf0"
        width="90%"
        alt="게시글 수정"
      />
    </td>
  </tr>
</table>




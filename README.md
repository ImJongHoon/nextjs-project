# Next JS Boilerplate 저장용

## git commit version 마다 특정 기능의 boilerplate 전략
### 1. main에는 boilerplate 관련 코드만 업로드

1) 설정 branch 생성
```
git checkout -b config/tailwind
```

2) Tailwind CSS 설정 완료 후 커밋.

3) master branch에 Tailwind CSS 설정 반영
```
git checkout master

git merge config/tailwind
```


### 2. boilerplate 기반 사용 실습은 branch를 파서 작성하기.

1) master에서 분기
```
git checkout -b practice/data-fetching
```

2) 실습 진행

3) 설정할 게 있다면 commit 후 master으로 이동

4) master boilerplate 업데이트 후 다시 복귀
```
git checkout -b practice/data-fetching
```

5) 이후 master의 설정을 합쳐서 실습 test 진행.
```
git merge master
```

## 3. 커밋 메세지 구조
```
<type>: <subject>
[optional body]
```

예시:
```
config: tailwind css 설정
```
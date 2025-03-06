create table greet (
   num int not null auto_increment,
   id char(15) not null,
   name  char(10) not null,
   nick  char(10) not null,
   subject char(100) not null,
   content text not null,
   -- text는 많은 내용을 적는 용량을 적용할 때 사용
   regist_day char(20),
   hit int,
   -- 조회수 = hit
   is_html char(1),
   primary key(num)
);
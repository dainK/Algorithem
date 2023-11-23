-- 코드를 입력하세요
# SELECT i.NAME, i.DATETIME from ANIMAL_INS i where not exists (SELECT * from ANIMAL_OUTS o where i.ANIMAL_ID = o.ANIMAL_ID) order by i.DATETIME DESC ROWNUM < 4



# SELECT a.NAME, a.DATETIME From (SELECT * from ANIMAL_INS i where not exists (SELECT * from ANIMAL_OUTS o where i.ANIMAL_ID = o.ANIMAL_ID) order by i.DATETIME DESC ) a where ROWNUM < 4

SELECT i.NAME, i.DATETIME from ANIMAL_INS i where not exists (SELECT * from ANIMAL_OUTS o where i.ANIMAL_ID = o.ANIMAL_ID) order by i.DATETIME limit 3

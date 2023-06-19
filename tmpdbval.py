import sqlite3
#data extracted from scanned answersheet of one record
#need to iterate for every answer (i.e q2 = B, q3 = D)
sourceList= [("A")]

try:
    conn=sqlite3.connect("tmp1.db")
    sql = ("insert into answers(q1) values(?);")

    cursor = conn.cursor()
    cursor.executemany(sql, sourceList)
    conn.commit()
    print("multiple insert operations OK")
    cursor.close()

except sqlite3.Error as e:
    print("Error while inserting data", e)

finally:
    if(conn):
        conn.close()
        print("connection closed")

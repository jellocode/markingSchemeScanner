import sqlite3
conn=sqlite3.connect("tmp1.db")
try:
    conn.execute('''
            Create table answers (
                q1 varchar(10),
                q2 varchar(10),
                q3 varchar(10)
            )
        ''')
    conn.close()

except:
    print("database exists")
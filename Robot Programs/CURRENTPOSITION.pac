'!TITLE "CURRENTPOSITION"
PROGRAM CURRENTPOSITION

' instance the variables
DEFPOS lp1
DIM jx AS JOINT
DIM li1 AS INTEGER
DIM li2 AS INTEGER

' set the variables
lp1 = CURPOS
jx = CURJNT
li1 = CURTOOL
li2 = CURWORK

' output the current relavent information
IF I[92] < I[93] THEN
' output the idle state of the machine and its position
PRINT #1, "POS", lp1, "STATE", 0, "JNT", jx, "WORK", li2, "TOOL", li1,
ELSE
' output the current position of the machine as its actioning'
PRINT #1, "POS", lp1, "JNT", jx, "WORK", li2, "TOOL", li1,
END IF
END

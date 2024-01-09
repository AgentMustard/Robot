'!TITLE "RUNCODE"
PROGRAM RUNCODE
TAKEARM 0 keep=1

IF I[92] > 0 THEN
SELECT CASE S[I[91]]

CASE "G00"
PRINT #1, "STATE", 2
MOVE L, P[I[91]], s=I[I[91]]
CALL BUFFEROUT

CASE "G01"
PRINT #1, "STATE", 2
MOVE P, P[I[91]], s=I[I[91]]
CALL BUFFEROUT

CASE "G02"
PRINT #1, "STATE", 2
DEFPOS lposG02
lposG02 = CURPOS + (POSX(P[I[91]]),POSY(P[I[91]]),POSZ(P[I[91]]),POSRX(P[I[91]]),POSRY(P[I[91]]),POSRZ(P[I[91]]))
MOVE L, lposG02, s=I[I[91]]
CALL BUFFEROUT

CASE "G03"
PRINT #1, "STATE", 2
DEFPOS lposG03
lposG03 = CURPOS + (POSX(P[I[91]]),POSY(P[I[91]]),POSZ(P[I[91]]),POSRX(P[I[91]]),POSRY(P[I[91]]),POSRZ(P[I[91]]))
MOVE P, lposG03, s=I[I[91]]
CALL BUFFEROUT

CASE "G04"
PRINT #1, "STATE", 2
DIM ljntG04 AS JOINT
ljntG04 = CURJNT + (POSX(P[I[91]]),POSY(P[I[91]]),POSZ(P[I[91]]),POSRX(P[I[91]]),POSRY(P[I[91]]),POSRZ(P[I[91]]))
MOVE P, ljntG04, s=I[I[91]]
CALL BUFFEROUT

CASE "G05"
PRINT #1, "STATE", 2
DELAY I[I[91]]
CALL BUFFEROUT

CASE "G06"
PRINT #1, "STATE", 2
DEFPOS lG06pos
lG06pos = CURPOS
LETF lG06pos = I[I[91]]
MOVE P, lG06pos, S=20
CALL BUFFEROUT

CASE "G50"
PRINT #1, "STATE", 3
CHANGETOOL I[I[91]]
I[94] = I[I[91]]
CALL BUFFEROUT

CASE "G51"
PRINT #1, "STATE", 3
TOOL I[I[91]], P[I[91]]
CALL BUFFEROUT

CASE "G52"
PRINT #1, "STATE", 3
CHANGEWORK I[I[91]]
I[95] = I[I[91]]
CALL BUFFEROUT

CASE "G53"
PRINT #1, "STATE", 3
WORK I[I[91]], P[I[91]]
CALL BUFFEROUT

END SELECT
END IF
END
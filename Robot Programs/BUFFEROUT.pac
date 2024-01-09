'!TITLE "BUFFEROUT"
PROGRAM BUFFEROUT

' Shift Buffer Out
I[91] = I[91] + 1

' Decrease Buffer Stored
I[92] = I[92] - 1

' ensure output buffer is limited
IF I[92] > I[93] THEN
I[91] = 0
END IF

END

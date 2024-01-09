'!TITLE "READCOMMS"
PROGRAM READCOMMS

DEFSTR lstr1 = ""
' remove the buffer on the RS232 comms port
FLUSH #1

' wait for an EOL on the RS232 comms port and take the data in the buffer
' always expect a string, then position, then integer'
INPUT #1, lstr1, P[I[90]], I[I[90]]

' double checking and cleaning input
IF lstr1 <> "" THEN
IF lstr1 = "HOLD" THEN
HALT "Holding..."
END IF
S[I[90]] = lstr1
' shift buffer in pointer
I[90] = I[90] + 1
' increase buffer storage
I[92] = I[92] + 1
END IF

' reset the buffer pointer if above max
IF I[90] > I[93] THEN
I[90] = 0
END IF

PRINTDBG "INPUT POINT POS = ", I[90]

END
def xo(s):
    s=s.lower()
    return True if s.count("x") == s.count("o") or (s.count("x") == 0 and s.count("o") == 0) else False

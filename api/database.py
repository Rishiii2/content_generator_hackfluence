import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

# Use /tmp on Vercel because the rest of the filesystem is read-only
# If we're not on Vercel, we can just use the local directory
if os.environ.get("VERCEL"):
    db_path = "sqlite:////tmp/karigar.db"
else:
    db_path = "sqlite:///./karigar.db"

engine = create_engine(
    db_path, connect_args={"check_same_thread": False}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

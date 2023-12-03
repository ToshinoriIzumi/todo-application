FROM python:3.11-buster
# pythonの出力表示をDocker用に調整
ENV PYTHONUNBUFFERED=1

RUN apt-get update && \
    apt-get install vim -y && \
    groupadd -g 1100 app_user && \
    useradd -m -s /bin/bash -u 1100 -g 1100 app_user

RUN mkdir -p /opt/app && chown -R app_user:app_user /opt/app
WORKDIR /opt/app

# poetryの定義ファイルをコピー (存在する場合)
COPY pyproject.toml* poetry.lock* ./

# poetryでライブラリをインストール (pyproject.tomlが既にある場合)
RUN pip install poetry && \
    poetry config virtualenvs.in-project true && \
    poetry config virtualenvs.create false && \
    if [ -f pyproject.toml ]; then poetry install --no-root; fi

USER app_user
# uvicornのサーバーを立ち上げる
ENTRYPOINT ["poetry", "run", "uvicorn", "api.main:app", "--host", "0.0.0.0", "--reload"]
<style lang="scss" scoped>
  #home {
    line-height: 1.61;
    .section {
      padding-top: 4rem;
      padding-bottom: 4rem;
      &:nth-child(even) {
        background-color: rgb(253, 252, 243);
      }
      & > .container {
        max-width: 1184px;
      }
    }
  }
</style>

<template>
  <div id="home">
    <section id="hero">
      <v-parallax src="@/assets/bg_7765.png" height="600">
        <v-row align="center" justify="center" no-gutters dense>
          <v-col class="text-center black--text" cols="12">
            <v-avatar size="160">
              <img src="@/assets/avatar.png" alt="Madaka Heri" />
            </v-avatar>
            <h1 class="text-h4 font-weight-bold mt-4">マダカ ヘリ</h1>
            <h4 class="subheading mt-2">Fullstack Web Enginner</h4>
          </v-col>
        </v-row>
        <section
          class="section py-4 mx-n4"
          style="background-color: rgba(0, 0, 0, 0.5)"
        >
          <v-container fill-height>
            <v-row>
              <v-col class="text-center">
                <h3>フロントを大切にするWebフルスタック</h3>
                <v-icon color="pink" size="40" class="my-4">mdi-heart</v-icon>
                <div class="text-xs-left">
                  どこまで行っても主戦場はフロントです。<br />
                  どうしようもないデータベース、メンテナンス不能なコードの復旧に自信あり！
                </div>
              </v-col>
            </v-row>
          </v-container>
        </section>
      </v-parallax>
    </section>
    <section class="section">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="6" order="first">
            <header class="text-center">
              <h1>Data Modeling</h1>
              <h4>ブログ構造が全ての基本</h4>
              <v-icon size="80" color="indigo">mdi-database</v-icon>
            </header>
          </v-col>
          <v-col cols="12" sm="6">
            全てのデータは
            Post、Comment、Category、Tagで表現できます。何故ならば、人類が発明したデータ構造にはHasOne、HasMany、MayToMayの３種類しか基本的には存在しないためです。データを正確に正規化すれば、バックエンドに書くコード量はほんの少しの量で済ませることができます。
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="section">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="6" order-sm="last">
            <header class="text-center">
              <h1>UI/UX</h1>
              <h4>データ構造の見えるUIデザイン</h4>
              <v-icon size="80" color="cyan">mdi-file</v-icon>
            </header>
          </v-col>
          <v-col cols="12" sm="6">
            ブログのコメントは投稿無しでは作成できません。当たり前のことですが、これがブログでないCMSサービスに置き換わった時、途端に企画とデザイナーが混乱し、データ構造に沿わないデザインを上げてくることがよくあります。データモデリング図からワイヤーを作成し、ユーザーにもデータ構造が伝わるデザインにすると、ユーザーはより便利な利用方法を発明でき、問い合わせも減ることでしょう。
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="section">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="6">
            <header class="text-center">
              <h1>Continuous Flow</h1>
              <h4>メンテナンス性が最優先</h4>
              <v-icon size="80" color="grey darken-3">mdi-linux</v-icon>
            </header>
          </v-col>
          <v-col cols="12" sm="6">
            継続的なチーム開発において、第一に優先するべきはメンテナンス性です。メンテナンス性を考慮せずにチーム開発は成り立ちません。
            ピンポイントで特異な構成を採用するくらいなら、コード量を増やしてでも基本パターンの繰り返しで何とかする選択をします。
            他人がメンテナンス出来ないコードなんて負の資産にしかなりませんからね。
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="section">
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-card outlined height="208" tag="section">
              <v-card-title>Web Application Works</v-card-title>
              <v-card-subtitle>
                <v-icon small color="success">mdi-check-circle</v-icon>
                HTML / CSS / JavaScript
              </v-card-subtitle>
              <v-card-text style="height: 80px">
                CMS/LPのデザインから実装まで。常にフロントを主戦場として様々なサービスに関わっています。
              </v-card-text>
              <v-spacer></v-spacer>
              <v-card-actions class="ml-n2">
                <v-chip
                  small
                  v-for="tag in ['Vue.js', 'Vuetify']"
                  :key="tag"
                  class="ml-2"
                >
                  {{ tag }}
                </v-chip>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card outlined height="208" tag="section">
              <v-card-title>Service/API Works</v-card-title>
              <v-card-subtitle>
                <v-icon small color="success">mdi-check-circle</v-icon>
                MySQL / NoSQL / PHP / Node.js
              </v-card-subtitle>
              <v-card-text style="height: 80px">
                どうしようもないデータベース、メンテナンス不能なコードの復旧に自信あり。
              </v-card-text>
              <v-spacer></v-spacer>
              <v-card-actions class="ml-n2">
                <v-chip
                  small
                  v-for="tag in ['Laravel', 'Expless', 'AWS Amplify']"
                  :key="tag"
                  class="ml-2"
                >
                  {{ tag }}
                </v-chip>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-card outlined height="208" tag="section">
              <v-card-title>System Architect</v-card-title>
              <v-card-subtitle>
                <v-icon small color="success">mdi-check-circle</v-icon>
                AWS / bash
              </v-card-subtitle>
              <v-card-text style="height: 80px">
                AWSサービスで設計からデプロイまで対応します。
              </v-card-text>
              <v-card-actions class="ml-n2">
                <v-chip
                  small
                  v-for="tag in ['AWS SAM', 'AWS CDK', 'AWS Amplify']"
                  :key="tag"
                  class="ml-2"
                >
                  {{ tag }}
                </v-chip>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <v-footer dark class="py-5">
      <v-container style="max-width: 1184px">
        <h4>オープンソース・プロジェクト</h4>
        <v-row class="mt-2">
          <v-col cols="12" sm="6">
            <v-card
              link
              height="250"
              href="https://github.com/laravel-expansions"
              target="_blank"
            >
              <v-card-title>
                <v-avatar tile>
                  <v-img src="@/assets/logo_laravel-expansions.png"></v-img>
                </v-avatar>
                <div class="ml-2">Laravel Expantions</div>
              </v-card-title>
              <v-card-text>
                <p>Laravel拡張パッケージ & CLI</p>
                <ul>
                  <li>
                    <strong>ServerlessLaravelTemplates</strong> -
                    サーバーレスLaravel構築CLI
                  </li>
                  <li>
                    <strong>QueryControllModel</strong> -
                    フロントから自由にデータ取り出し！
                  </li>
                  <li>
                    <strong>AWS Helpers</strong> - AWSリソースをヘルパ関数に収録
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card
              link
              height="250"
              href="https://github.com/behemothjs"
              target="_blank"
            >
              <v-card-title>
                <v-avatar tile>
                  <v-img src="@/assets/logo_behemothjs.png"></v-img>
                </v-avatar>
                <div class="ml-2">Behemoth.js</div>
              </v-card-title>
              <v-card-text>
                作ってるうちに目的を失ったプロジェクト。<br />
                <ul>
                  <li>作りかけ。</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h4 class="mb-2">SNS</h4>
            <v-btn
              icon
              outlined
              href="https://twitter.com/MadakaHeri"
              target="_blank"
            >
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn
              icon
              outlined
              href="https://github.com/madakaheri"
              target="_blank"
              class="ml-2"
            >
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
    <footer class="yellow text-center py-2">
      <small>
        Copyright &copy {{ new Date().getFullYear() }} MadakaHeri All right
        reserved.
      </small>
    </footer>
  </div>
</template>

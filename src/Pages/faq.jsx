import "react-multi-carousel/lib/styles.css";
import "react-tabs/style/react-tabs.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import Gs from "../Theme/globalStyles";
import { Link } from "react-router-dom";
import Collapse from "@kunukn/react-collapse";
import Collapsible from 'react-collapsible';
import Media from "../Theme/media-breackpoint";

import Blackcross from "../Assets/images/black-cross.svg";
import Bluecross from "../Assets/images/blue-cross.svg";

class Faq extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen1: false,
      tabPanel: 'all',
      searched: false,
      filter: [],
      page: 1,
    };
  }

  render() {
    return (
      <Gs.MainSection>
        <FaqContainer>
          <Faqtitle>
            <h2>Frequently Asked Questions</h2>
            <FilterLbx>
              <button className="active" id="all">
                <FormattedMessage id="all" defaultMessage="All" />
              </button>
              <button className="">Getting Started</button>
              <button className="">Wallet Usage</button>
              <button className="">Buying NFTs</button>
              <button className="">Creating NFTs</button>
              <button className="">Becoming a Creator</button>
              <button className="">Fees & Commissions</button>
            </FilterLbx>
            <FaqAccordian>
              <Collapsible trigger="What is Avangart?">
                <p>Avangart is a curated NFT marketplace which aims to host best-in-class creators from different verticals like art, celebrities & sport. Please see the "About Us" page for more details.</p>
              </Collapsible>
              <Collapsible trigger="What is an NFT?">
                <p>An NFT (non-fungible token) is a unit of data stored on a blockchain network that functions as "proof of ownership & authenticity" for unique assets like digital art pieces or collectibles. Visit our blog to learn more about NFTs. </p>
              </Collapsible>
              <Collapsible trigger="What is blockchain?">
                <p>A blockchain is a publicly accessible online ledger (database) of transactions that is duplicated and distributed across the entire network of computer systems on the blockchain. Once your NFTs are recorded on the ledger, they cannot be modified or removed by a central authority.</p>
              </Collapsible>
              <Collapsible trigger="On which blockchain does Avangart run its operations?">
                <p>Avangart is running on Binance Smart Chain mainly due to low transactions fees for both creators and collectors.</p>
              </Collapsible>
              <Collapsible trigger="What do I need to use Avangart?">
                <p>Avangart is a web-based solution that can be accessed over both desktop and mobile. The only thing you will need is the browser add-ins or mobile apps of third-party cryptocurrency wallets that you will connect to Avangart. Please visit the "How To Use?" section to access our video guides on this issue.</p>
              </Collapsible>
              <Collapsible trigger="How do I get started?">
                <p>To use Avangart, you need to connect your third-party cryptocurrency wallet. Please visit the "How To Use?" section to access our video guides on this issue.</p>
              </Collapsible>
              <Collapsible trigger="What is a cryptocurrency wallet?">
                <p>A cryptocurrency wallet is a secure digital wallet used to store, send, and receive cryptocurrencies. To store your NFTs, you will need to use a cryptocurrency wallet.</p>
              </Collapsible>
              <Collapsible trigger="Which options are available for using Avangart?">
                <p>Currently, you can connect to Avangart with third-party wallets Metamask & TrustWallet.</p>
              </Collapsible>
              <Collapsible trigger="How can I connect my crypto wallet to Avangart?">
                <p>You can use the "Login" button on the top right corner to choose which third-party wallet you would like to connect to. Please visit the "How To Use?" section to access our video guides on this issue.</p>
              </Collapsible>
              <Collapsible trigger="What is the seed phrase for crypto wallets?">
                <p>Seed Phrase is a key that can be used to recover your wallet account if you forget your password. The third-party wallet provides the phrase, and it is essential to store this piece of information in a secure place. Otherwise, you will lose your NFTs forever when you forget your account credentials.</p>
              </Collapsible>
              <Collapsible trigger="Which cryptocurrencies should I store to make purchases in Avangart?">
                <p>Currently only accepted cryptocurrency in Avangart is BNB, which is the native coin of Binance Smart Chain.</p>
              </Collapsible>
              <Collapsible trigger="Where can I buy BNBs?">
                <p>We suggest using the global or local applications of Binance to buy BNBs securely. You can also buy BNBs directly in your TrustWallet with a credit card.</p>
              </Collapsible>
              <Collapsible trigger="How can I top-up my crypto wallet with BNBs?">
                <p>You can transfer BNBs from cryptocurrency exchanges like Binance to your MetaMask or TrustWallet accounts using your wallet address, like traditional money transfer experience with bank account numbers. Please visit the "How To Use?" section to access our video guides on this issue.</p>
              </Collapsible>
              <Collapsible trigger="Should I pay for using crypto wallets?">
                <p>You do not need to pay anything to open up a wallet account or to maintain it. However, for each transaction, you will pay commissions.</p>
              </Collapsible>
              <Collapsible trigger="Who controls my crypto account balance?">
                <p>You have full ownership of your balance through the third-party wallet service you use; Avangart does not hold your balance on your behalf.</p>
              </Collapsible>
              <Collapsible trigger="How do I buy an NFT?">
                <p>There are three main sales statuses for NFTs. In the first one, "Buy Now", you can buy the NFT immediately as you pay the set amount by the creator. In the "Live Auction" case, you can bid for an NFT, and you will buy it if your bid is the highest at the end of the auction. In the last scenario, "Available for Offer", you can make an offer to the seller as the price is not pre-determined. Sales will take place if your offer is accepted. In all cases, the amount will be deducted from your account balance automatically and will be transferred to the seller. Please visit the "How To Use?" section to access our video guides on this issue.</p>
              </Collapsible>
              <Collapsible trigger="Do I need to pay any fees to buy an NFT?">
                <p>Although Avangart does not charge any buyer fees, you need to pay a small transaction fee to the blockchain network independent from Avangart. So, before trying to buy an NFT, please make sure that your balance is enough to cover the NFT price along with the transaction fee.</p>
              </Collapsible>
              <Collapsible trigger="Which payment methods are accepted?">
                <p>Currently, cryptocurrencies are the only way of making payments. The team is working on alternative payment methods for your convenience.</p>
              </Collapsible>
              <Collapsible trigger="How does the escrow system work in auctions?">
                <p>To take part in the auctions, you will need to have the necessary balance to cover your bid. That amount will be blocked during the auction and automatically transferred to the seller if your offer is the highest. If any other user overbids, your funds will be refunded. As each transaction will be subject to a transaction fee, we recommend overbidding the previous offer at least by 5%.   </p>
              </Collapsible>
              <Collapsible trigger="Where do I keep my NFTs?">
                <p>Your NFTs are transferred to your third-party crypto wallet upon purchase. So you have full ownership of the NFTs while the creation files uploaded are stored in a secure location by Avangart.</p>
              </Collapsible>
              <Collapsible trigger="How can I see my collected NFTs?">
                <p>To see all your NFTs, you can go to the "Collected" tab under your "Profile".</p>
              </Collapsible>
              <Collapsible trigger="Can I resell my NFTs?">
                <p>You can resell your NFTs either as "Buy Now" with a pre-determined price or as "Available for Offer", in which you can evaluate the offers from potential buyers without a set price. Currently, "Live Auction" is only available for creators in the first-hand market.</p>
              </Collapsible>
              <Collapsible trigger="Can I transfer/gift my NFTs to other users?">
                <p>As you are the true owner of your NFTs, you can transfer/gift them to other collectors without getting paid.</p>
              </Collapsible>
              <Collapsible trigger="What is NFT minting?">
                <p>Minting basically refers to the process of creating NFT over a selected asset. </p>
              </Collapsible>
              <Collapsible trigger="Who can mint NFTs in Avangart?">
                <p>Avangart is a curated marketplace. Only approved creators in each vertical are entitled to create NFTs in Avangart platform.</p>
              </Collapsible>
              <Collapsible trigger="How can I mint NFTs on Avangart?">
                <p>After you are approved as creator, you will have access to the "NFT Minting" page.  Please visit the "How To Use?" section to access our video guides on this issue.</p>
              </Collapsible>
              <Collapsible trigger="Should I pay for minting NFTs?">
                <p>Although the gas fee paid for minting an NFT is volatile, the recent amount is referred to as 0.005 BNB by Binance sources. Please make sure that you have enough balance in your wallet before start minting.</p>
              </Collapsible>
              <Collapsible trigger="Who owns my NFTs?">
                <p>NFTs are stored in your third-party wallet. Avangart, or your third-party wallet, does not have access to your NFTs. </p>
              </Collapsible>
              <Collapsible trigger="What am I selling exactly?">
                <p>Unless you have a special agreement with Avangart, the buyer of an edition will be given the right to use and display that specific edition for non-commercial purposes only, along with the right of reselling that particular edition in the second-hand market. </p>
              </Collapsible>
              <Collapsible trigger="Who sets the price for my NFTs?">
                <p>Creators have complete control over the prices of NFTs they minted</p>
              </Collapsible>
              <Collapsible trigger="What is an edition?">
                <p>Creators can choose the number of editions for each NFT they create. Each edition is unique, with a number in the collection. As the prices of editions are set by the market separately, editions can vary hugely in price according to the demand.</p>
              </Collapsible>
              <Collapsible trigger="How many editions can I create for an NFT?">
                <p>Avangart provides complete control to the creator on the number of editions. However, we strongly suggest the creators limit their creations strategically as the actual value of an NFT comes from being limited.</p>
              </Collapsible>
              <Collapsible trigger="What is unlockable content?">
                <p>Unlockable Content is a free text area that will be seen only by the buyer of that NFT. This text area can be used for attaching notes, web links, or promo codes.</p>
              </Collapsible>
              <Collapsible trigger="What is the co-creation mechanism?">
                <p>Co-creation is an automatic settlement mechanism for creations with two copyright owners. Sales revenue generated from first-hand sales and second-hand royalty can automatically be distributed between two co-creators with a flexible percentage. In the co-creation case, although the rights on the revenue are mutual, the primary owner of the NFT on the blockchain network will be the minter.</p>
              </Collapsible>
              <Collapsible trigger="Can I make changes after minting the NFT?">
                <p>Once you mint the NFT, you cannot change the underlying asset, name, explanations, or number of editions. Please make sure that you are comfortable with the content before minting.</p>
              </Collapsible>
              <Collapsible trigger="How do I get paid for my sold NFTs?">
                <p>Once your creation is sold, your amount will be automatically debited to your crypto wallet. Payments are facilitated automatically by the system over smart contracts, so Avangart does not have any control on funds transferred upon payments.</p>
              </Collapsible>
              <Collapsible trigger="How does the royalty system work?">
                <p>For every second-hand sale, creators will collect a 10% royalty fee to protect their creator rights to the perpetuity.</p>
              </Collapsible>
              <Collapsible trigger="How can I apply to become a creator?">
                <p>To apply, you can go to the "Become a Creator" form from here. Please make sure that you fill all the necessary areas before you submit.</p>
              </Collapsible>
              <Collapsible trigger="How long should I wait to hear back about my application?">
                <p>Applications are handled in badges, so it can take some time to go over your application. If you have a concern about your form being submitted correctly, you can contact us.</p>
              </Collapsible>
              <Collapsible trigger="How can I track my application status?">
                <p>In case your creator status is approved, we will let you know by e-mail. Please make sure that you entered your e-mail address correctly during application & check your mailbox frequently. </p>
              </Collapsible>
              <Collapsible trigger="Does Avangart have a membership fee?">
                <p>No, Avangart does not charge any membership fees.</p>
              </Collapsible>
              <Collapsible trigger="What are the platform fees for sellers?">
                <p>If you are the creator of an NFT, you will be charged a 10% commission over your sales amount. If you are reselling an NFT in the second-hand market, the 5% platform commission will automatically be deducted from your sales amount.</p>
              </Collapsible>
              <Collapsible trigger="Do I need to pay any fees for buying NFTs?">
                <p>Avangart does not charge any buyer fees in both first and second-hand sales.</p>
              </Collapsible>
              <Collapsible trigger="Do I need to pay any other fees for buying or selling NFTs besides platform fees?">
                <p>For each transaction, from minting an NFT to bidding for it, you will need to pay a small amount to the blockchain network. These fees are not controlled or owned by Avangart.</p>
              </Collapsible>
            </FaqAccordian>
          </Faqtitle>
        </FaqContainer>
      </Gs.MainSection>
    );
  }
  toggle = (index) => {
    let collapse = "isOpen" + index;
    this.setState((prevState) => ({ [collapse]: !prevState[collapse] }));
  };
}
// Common Style Div
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const FaqContainer = styled.div`
  margin:60px auto 80px; max-width:835px; width:100%;
  ${Media.md}{
    width:94%;
  }
`;

const Faqtitle = styled.div`
  h2{font-size:32px; letter-spacing:-1.52px; font-weight:700; margin:0px 0px 20px; color:#000; line-height:normal;
    ${Media.sm}{
      font-size:24px; letter-spacing:-1.14px;
    }
  }
`;
const FilterLbx = styled(FlexDiv)`
  justify-content: flex-start; 
  margin-bottom:40px; 
  ${Media.md}{
    overflow-x:auto;
    overflow-y:hidden;
    flex-wrap:initial;
    padding:10px 0px;
  }
  button {
    display: inline-block;
    padding: 10px 25px;
    font-size: 14px;
    font-weight: 600;
    color: #000000;
    border-radius: 15px;
    background-color: #eef2f7;
    margin:0px 8px 8px 0px;
    ${Media.md}{
      white-space: pre;
    }
    &.active {
      background-color: #00babc;
      color: #fff;
    }
    :hover {
      background-color: #00babc;
      color: #fff;
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
    }
  }
`;

const FaqAccordian = styled.div`
  .Collapsible
  {
    margin:0px 0px 40px; 
  }
  .Collapsible__trigger
  { 
    font-size:20px; 
    letter-spacing:-0.89px; 
    font-weight:bold; 
    color:#000; 
    line-height:normal; 
    border-bottom:1px solid #ddd; 
    cursor:pointer; 
    padding:0px 17px 13px 0px; 
    display:block; 
    position:relative;
    :after
    {
      content:''; 
      width:14px; 
      height:14px; 
      position:absolute; 
      right:0px; 
      top:5px; 
      background:url(${Blackcross}); 
      background-size:contain;
    }
    ${Media.sm}{
      font-size:16px; letter-spacing:-0.71px;
    }
    &.is-open{
      color:#00babc; border-bottom:none;
      :after{ width:17px; height:17px; background:url(${Bluecross}); background-size:contain; }
      + .Collapsible__contentOuter
        {
          border-bottom:1px solid #00babc;
        }
      } 
      
    }
  }
  .Collapsible__contentInner{
    p{font-size:16px; color:#000; letter-spacing:-0.8px; line-height:normal;
      ${Media.sm}{
        font-size:14px; letter-spacing:-0.7px;
      }
    }
  }
`;


export default Faq;

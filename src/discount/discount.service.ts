import { Injectable, NotFoundException } from '@nestjs/common';
import { Item } from './dto/checkout_discount.dto.js';
import { CreateDiscountDto } from './dto/create-discount.dto.js';
import { UpdateDiscountDto } from './dto/update-discount.dto.js';

@Injectable()
export class DiscountService {
  checkout(items:   Item[], member = false, coupon?: string) {

    let subtotal = 0;
    for (const item of items) {
      subtotal += item.price * item.qty;
    }

    let memberDiscount = 0;
    if (member) {
      memberDiscount = subtotal * 0.05;
    }

    // coupon discount
    let couponDiscount = 0;
    if (coupon) {
      if (coupon === 'HEMAT10') couponDiscount = subtotal * 0.1;
      else if (coupon === 'HEMAT20') couponDiscount = subtotal * 0.2;
      else if (coupon === 'FREESHIP') couponDiscount = 0;
      else throw new NotFoundException('Coupon not found');
    }

    const totalDiscount = memberDiscount + couponDiscount;

    return {
      success: true,
      message: 'Checkout calculated',
      data: {
        subtotal,
        member,
        coupon,
        discounts: {
          member: memberDiscount,
          coupon: couponDiscount,
          total: totalDiscount,
        },
        grandTotal: subtotal - totalDiscount,
      },
    };
  }
}